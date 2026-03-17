/**
 * Home Page — TASK-10/22/25/26/27
 * Design: "Neon Operations"
 * Sections: Hero, Stats, Core Services, Hub Services, AI Callout, Social Proof, Why Oplytics, CTA
 * Enhanced with: AnimateOnScroll, SEOHead, mobile responsive audit, accessibility
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import FeatureGrid from '@/components/shared/FeatureGrid';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';
import { coreServices, hubServices, liveServices } from '@/config/services';
import { Link } from 'wouter';
import {
  ArrowRight, TrendingUp, Shield, BarChart3,
  Target, Zap, Users, Sparkles
} from 'lucide-react';

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
        headline="Operational Excellence, Digitised."
        subtext="The platform that connects your manufacturing floor to your boardroom. Real-time OEE, digital SQDCP boards, safety management, and continuous improvement — all in one place."
        status="live"
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-main-8i2QPeXPF5Zif5HP36QHAA.webp"
        customCtas={[
          { label: 'See How It Works', href: '/contact', variant: 'primary' },
          { label: 'Explore Solutions', href: '#solutions', variant: 'secondary' },
        ]}
      />

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

      {/* Solutions Grid */}
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

          {/* Core Services */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.08}>
            {coreServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </StaggerContainer>

          {/* Delineation Line */}
          <div className="flex items-center gap-4 my-8 sm:my-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1E2738] to-transparent" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#596475] whitespace-nowrap">
              Specialist Hubs
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1E2738] to-transparent" />
          </div>

          {/* Hub Services */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.08}>
            {hubServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </StaggerContainer>
        </div>
      </section>

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
              From predictive maintenance alerts in OEE Manager to smart anomaly detection in SQDCP Dashboard, AI is woven into the fabric of the platform — not bolted on as an afterthought.
            </p>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left" variant="slide-up" staggerDelay={0.1}>
            {[
              { title: 'Predictive Analytics', desc: 'AI forecasts equipment failures, quality issues, and safety risks before they happen.' },
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


      {/* Why Oplytics */}
      <FeatureGrid
        items={whyFeatures}
        columns={3}
        sectionLabel="Why Oplytics"
        sectionTitle="Built Different. Built Better."
      />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" role="region" aria-label="Call to action">
        <AnimateOnScroll variant="scale-in" className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Ready to Transform Your Operations?
          </h2>
          <p className="text-sm sm:text-base text-[#8890A0] mb-8 max-w-xl mx-auto">
            Join leading manufacturers who have already digitised their operational excellence journey with Oplytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
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
