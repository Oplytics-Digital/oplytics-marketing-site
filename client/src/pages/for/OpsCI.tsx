/**
 * Dedicated persona landing page — OpEx / CI Leader
 * Route: /for/ops-ci
 * Ad-landable, standalone from any single product module (unlike the old
 * Connect-scoped role pages this replaces). Own hero, own proof points.
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import SystemFlowDiagram from '@/components/shared/SystemFlowDiagram';
import { sizePresets, calculateROI } from '@/lib/roiCalculator';
import { Link } from 'wouter';
import {
  ArrowRight, Target, Layers, GitBranch, CheckCircle2,
  ClipboardList, TrendingUp,
} from 'lucide-react';

const roiResults = calculateROI({ size: 'medium', ...sizePresets.medium });

const painPoints = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'CI runs on spreadsheets and memory',
    description: 'Actions from tier meetings live in someone\'s notebook. Hoshin plans get reviewed once a quarter and forgotten in between. Nothing connects to anything else.',
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Strategy stays in the boardroom',
    description: 'Objectives get set at the top and lost in translation by the time they reach the floor. Teams work hard on the wrong things because the cascade breaks down.',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'No one can prove the $ impact',
    description: 'You know the CI programme is working. You can\'t easily show finance which action, on which line, produced which saving — so the programme competes for budget every year.',
  },
];

const whatYouGet = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'One Connected Platform',
    description: 'Policy Deployment, SQDCP Dashboards, OEE tracking, and Action Manager all share one data model. An action raised in a huddle links back to the Hoshin objective it serves.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'Every Action Traceable to Closure',
    description: 'No action lives outside the platform. Raise it from an audit, a tier meeting, or an OEE loss — it gets an owner, a due date, and tracks through to verified closure.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'AI That Runs the Huddle With You',
    description: 'The AI Facilitator surfaces what\'s red, drafts a starter 5-Why, and tracks who owns what by when — so tier meetings run on data, not on who remembered to update the board.',
  },
];

export default function OpsCI() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Oplytics for OpEx & CI Leaders"
        description="Stop running Continuous Improvement on spreadsheets and sticky notes. Oplytics gives CI leaders one connected platform from Policy Deployment to verified action closure — with the $ impact attached."
      />

      <HeroSection
        headline="Finally, CI Infrastructure That Works the Way CI Should"
        subheadline="For OpEx & Continuous Improvement Leaders"
        subtext="You live and breathe continuous improvement. Oplytics connects Policy Deployment, SQDCP Dashboards, OEE tracking, and structured problem solving into one platform — so every improvement effort is traceable, not just believed."
        status="live"
        customCtas={[
          { label: 'Try It Free', href: '/contact', variant: 'primary' },
          { label: 'See the Platform', href: '/why-us', variant: 'secondary' },
        ]}
      />

      {/* Pain points */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12">
            <span className="section-label text-[#EF4444] mb-3 block">The Problem</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              You Know CI Works. Proving It Is the Hard Part.
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <div key={i} className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4 bg-[#EF4444]/10 text-[#EF4444]">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>{p.title}</h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <FeatureGrid
        items={whatYouGet}
        columns={3}
        sectionLabel="Built for CI"
        sectionTitle="One Platform, Not Another Tool to Maintain"
      />

      {/* Traceability mechanism — the actual differentiator */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40" style={{ background: 'linear-gradient(180deg, #080C16 0%, #0D1220 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <span className="section-label text-[#1DB8CE] mb-4 block">How It Connects</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10" style={{ fontFamily: 'Montserrat' }}>
              One Cascade, From Strategy to the Shop Floor
            </h2>
          </AnimateOnScroll>
          <SystemFlowDiagram />
        </div>
      </section>

      {/* ROI teaser */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll variant="scale-in">
            <span className="section-label text-[#22C55E] mb-4 block">The $ Impact</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Make the Business Case in One Number
            </h2>
            <p className="text-sm sm:text-base text-[#8890A0] mb-8">
              A mid-sized manufacturer ({sizePresets.medium.headcount} employees, {sizePresets.medium.lines} lines, {sizePresets.medium.sites} sites) has an estimated annual benefit of:
            </p>
            <div className="text-5xl sm:text-6xl font-black text-[#22C55E] mb-3" style={{ fontFamily: 'Montserrat' }}>
              £{roiResults.totalAnnualBenefit.toLocaleString()}
            </div>
            <p className="text-xs text-[#596475] max-w-lg mx-auto mb-8">
              Based on conservative industry benchmarks — actual results vary by operation. Get a personalised estimate for your sites and lines.
            </p>
            <Link
              href="/pricing"
              data-umami-event="cta_click"
              data-umami-event-button="calculate_your_savings"
              data-umami-event-location="for_ops_ci_roi"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              Calculate Your Savings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40" style={{ background: '#080C16' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            See It Running on Your Own Data
          </h2>
          <p className="text-[#8890A0] mb-8">
            Try it free and walk through Policy Deployment, SQDCP, and Action Manager connected the way your CI programme needs them to be.
          </p>
          <Link
            href="/contact"
            data-umami-event="cta_click"
            data-umami-event-button="try_it_free"
            data-umami-event-location="for_ops_ci_bottom"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
            style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
          >
            Try It Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </MarketingLayout>
  );
}
