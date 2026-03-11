/**
 * Why Us Page
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import FeatureGrid from '@/components/shared/FeatureGrid';
import { Link } from 'wouter';
import {
  ArrowRight, Zap, Shield, BarChart3, Target,
  Users, TrendingUp, Layers, Globe, Clock
} from 'lucide-react';

const differentiators = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Purpose-Built for Manufacturing',
    description: 'Not a generic project management tool adapted for factories. Every feature is designed for the unique challenges of manufacturing operations.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Unified Data Model',
    description: 'All eight services share a single data model. An action raised in SQDCP flows into Action Manager. OEE data feeds Safety dashboards. No silos.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Days to Deploy, Not Months',
    description: 'Cloud-native SaaS means zero infrastructure. Configure your first board in minutes. Full deployment in days, not the months typical of MES systems.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Multi-Site, Multi-Language',
    description: 'Designed for global operations from day one. Centralised dashboards with site-level autonomy. Localisation built into the core.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant infrastructure. SSO/SAML integration. Role-based access control. Your data is encrypted at rest and in transit.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Built by Operators, for Operators',
    description: 'Our team has decades of manufacturing experience. We have stood on the shop floor, run the tier meetings, and felt the pain of paper-based systems.',
  },
];

const metrics = [
  { value: '35%', label: 'Average OEE Improvement', sublabel: 'within first 6 months' },
  { value: '60%', label: 'Reduction in Downtime', sublabel: 'through proactive monitoring' },
  { value: '90%', label: 'Action Closure Rate', sublabel: 'vs. 40% industry average' },
  { value: '4x', label: 'Faster Incident Response', sublabel: 'with digital reporting' },
];

export default function WhyUs() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-0 bg-radial-purple pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="section-label text-[#8C34E9] mb-3 block">Why Oplytics</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
            The Platform That Understands Manufacturing
          </h1>
          <p className="text-lg text-[#8890A0] max-w-2xl mx-auto">
            We are not another generic SaaS tool. Oplytics is built from the ground up for operational excellence in manufacturing environments.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-gradient-purple mb-1" style={{ fontFamily: 'Montserrat' }}>
                {m.value}
              </div>
              <div className="text-sm font-medium text-white mb-0.5">{m.label}</div>
              <div className="text-xs text-[#596475]">{m.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <FeatureGrid
        items={differentiators}
        columns={3}
        sectionLabel="Our Difference"
        sectionTitle="What Sets Us Apart"
      />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: '#080C16' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            See It In Action
          </h2>
          <p className="text-[#8890A0] mb-8">
            Book a personalised demo and see how Oplytics can transform your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
            style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </MarketingLayout>
  );
}
