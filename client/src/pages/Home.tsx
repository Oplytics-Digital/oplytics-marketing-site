/**
 * Home Page — Oplytics.digital Marketing Site
 * Design: "Neon Operations"
 * Sections: Hero, Services Grid, Why Oplytics, CTA
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import FeatureGrid from '@/components/shared/FeatureGrid';
import { services } from '@/config/services';
import { Link } from 'wouter';
import {
  ArrowRight, TrendingUp, Shield, BarChart3,
  Target, Zap, Users
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
    description: 'Designed by operations professionals for operations professionals. Every feature solves a real shop-floor problem.',
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
      {/* Hero */}
      <HeroSection
        headline="Operational Excellence, Digitised."
        subtext="The platform that connects your shop floor to your boardroom. Real-time OEE, digital SQDCP boards, safety management, and continuous improvement — all in one place."
        status="live"
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-main-8i2QPeXPF5Zif5HP36QHAA.webp"
        customCtas={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Solutions', href: '#solutions', variant: 'secondary' },
        ]}
      />

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '8', label: 'Platform Services' },
            { value: '2', label: 'Live & Deployed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#596475] font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-[#8C34E9] mb-3 block">Platform Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              One Platform, Eight Solutions
            </h2>
            <p className="text-[#8890A0] mt-4 max-w-2xl mx-auto">
              Each service is purpose-built for manufacturing operations. Start with what you need, scale when you are ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Ready to Transform Your Operations?
          </h2>
          <p className="text-[#8890A0] mb-8 max-w-xl mx-auto">
            Join leading manufacturers who have already digitised their operational excellence journey with Oplytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/40 hover:text-white bg-[#0D1220]/60"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
