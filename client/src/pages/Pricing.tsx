/**
 * Pricing Page — Single source of truth for all pricing.
 * Design: "Neon Operations"
 * Only shows Live services in pricing tiers.
 * In Development services listed separately with 'Coming Soon'.
 */
import { useState } from 'react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import PricingTier, { type PricingPlan } from '@/components/shared/PricingTier';
import { inDevServices } from '@/config/services';
import { Link } from 'wouter';

const monthlyPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '£299',
    period: '/month',
    description: 'Perfect for single-site operations getting started with digital OEE tracking.',
    features: [
      'OEE Manager — 1 production line',
      'SQDCP Logic — 1 team board',
      'Up to 10 users',
      'Email support',
      'Standard reporting',
      'Mobile app access',
    ],
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Professional',
    price: '£799',
    period: '/month',
    description: 'For growing operations that need full visibility across multiple lines and teams.',
    features: [
      'OEE Manager — up to 10 lines',
      'SQDCP Logic — unlimited boards',
      'Up to 50 users',
      'Priority support',
      'Advanced analytics & dashboards',
      'API access',
      'Custom integrations',
      'Shift handover reports',
    ],
    highlighted: true,
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For multi-site organisations requiring enterprise-grade features and dedicated support.',
    features: [
      'All Professional features',
      'Unlimited lines & boards',
      'Unlimited users',
      'Dedicated account manager',
      'Custom SLA',
      'SSO / SAML integration',
      'On-premise deployment option',
      'Training & onboarding programme',
    ],
    ctaLabel: 'Contact Sales',
    ctaHref: '/contact',
  },
];

const annualPlans: PricingPlan[] = monthlyPlans.map(plan => ({
  ...plan,
  price: plan.price === 'Custom' ? 'Custom' : `£${Math.round(parseInt(plan.price.replace('£', '')) * 10)}`,
  period: plan.price === 'Custom' ? '' : '/year',
  description: plan.description + (plan.price !== 'Custom' ? ' Save ~17% with annual billing.' : ''),
}));

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = annual ? annualPlans : monthlyPlans;

  return (
    <MarketingLayout>
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label text-[#8C34E9] mb-3 block">Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[#8890A0] mb-8">
            Start small, scale fast. All plans include access to live services with no hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-lg bg-[#0D1220] border border-[#1E2738]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !annual ? 'bg-[#8C34E9] text-white' : 'text-[#8890A0] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                annual ? 'bg-[#8C34E9] text-white' : 'text-[#8890A0] hover:text-white'
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-[#22C55E]">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingTier key={i} plan={plan} />
          ))}
        </div>
      </section>

      {/* Coming Soon Services */}
      {inDevServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-label text-[#8C34E9] mb-3 block">Coming Soon</span>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                Services In Development
              </h2>
              <p className="text-sm text-[#8890A0] mt-2">
                These services are currently being built. Register your interest to get early access.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inDevServices.map(service => (
                <Link
                  key={service.id}
                  href={`/solutions/${service.slug}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-[#8C34E9]/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8C34E9]" />
                  <div>
                    <div className="text-sm font-semibold text-white">{service.name}</div>
                    <div className="text-xs text-[#596475]">Coming Soon</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </MarketingLayout>
  );
}
