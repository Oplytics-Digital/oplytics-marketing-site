/**
 * Pricing Page — TASK-11: Canonical /pricing page (single source of truth)
 * Design: "Neon Operations"
 *
 * Sections:
 *   1. Header with monthly/annual toggle
 *   2. Pricing tiers (live services only)
 *   3. Coming Soon (in-development services)
 *   4. ROI / Payback Calculator (tiered by enterprise size)
 *   5. FAQ
 *   6. Contact form
 */
import { useState } from 'react';
import MarketingLayout from '@/components/shared/MarketingLayout';
import PricingTier, { type PricingPlan } from '@/components/shared/PricingTier';
import ContactForm from '@/components/shared/ContactForm';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';
import { inDevServices } from '@/config/services';
import { Link } from 'wouter';
import { Calculator, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

/* ── Pricing Plans ── */
const monthlyPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '£299',
    period: '/month',
    description: 'Perfect for single-site operations getting started with digital management.',
    features: [
      'OEE Manager — 1 production line',
      'SQDCP Hub — 1 team board',
      'Policy Deployment — 1 X-matrix',
      'Action Manager — up to 50 actions',
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
      'SQDCP Hub — unlimited boards',
      'Policy Deployment — unlimited',
      'Action Manager — unlimited actions',
      'Up to 50 users',
      'Priority support',
      'Advanced analytics and dashboards',
      'AI-powered insights',
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
      'Unlimited lines and boards',
      'Unlimited users',
      'Full AI suite',
      'Dedicated account manager',
      'Custom SLA',
      'SSO / SAML integration',
      'On-premise deployment option',
      'Training and onboarding programme',
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

/* ── ROI Calculator ── */
type CompanySize = 'small' | 'medium' | 'large';

interface ROIInputs {
  size: CompanySize;
  headcount: number;
  lines: number;
  sites: number;
}

const sizePresets: Record<CompanySize, { label: string; headcount: number; lines: number; sites: number }> = {
  small: { label: 'Small (< 100 employees)', headcount: 50, lines: 3, sites: 1 },
  medium: { label: 'Medium (100–500 employees)', headcount: 250, lines: 12, sites: 2 },
  large: { label: 'Large (500+ employees)', headcount: 800, lines: 40, sites: 5 },
};

function calculateROI(inputs: ROIInputs) {
  const { headcount, lines, sites } = inputs;
  // Conservative estimates based on industry research
  const avgHourlyLabourCost = 22; // £/hr
  const hoursPerWeek = 40;
  const weeksPerYear = 48;

  // Time savings: ~2 hrs/week per line from automated data collection
  const timeSavingsPerLine = 2 * avgHourlyLabourCost * weeksPerYear;
  const totalTimeSavings = timeSavingsPerLine * lines;

  // OEE improvement: conservative 3% improvement = significant throughput gain
  const avgRevenuePerLine = 500000; // £/year
  const oeeImprovement = 0.03;
  const throughputGain = avgRevenuePerLine * oeeImprovement * lines;

  // Meeting efficiency: 15 min saved per tier meeting, 5 meetings/week per site
  const meetingSavings = (15 / 60) * avgHourlyLabourCost * 5 * 5 * weeksPerYear * sites;

  const totalAnnualBenefit = totalTimeSavings + throughputGain + meetingSavings;

  // Estimated cost
  const estimatedAnnualCost = inputs.size === 'small' ? 3588 : inputs.size === 'medium' ? 9588 : 24000;

  const roi = ((totalAnnualBenefit - estimatedAnnualCost) / estimatedAnnualCost) * 100;
  const paybackMonths = Math.ceil((estimatedAnnualCost / totalAnnualBenefit) * 12);

  return {
    totalAnnualBenefit: Math.round(totalAnnualBenefit),
    estimatedAnnualCost,
    roi: Math.round(roi),
    paybackMonths: Math.min(paybackMonths, 12),
    timeSavings: Math.round(totalTimeSavings),
    throughputGain: Math.round(throughputGain),
    meetingSavings: Math.round(meetingSavings),
  };
}

/* ── FAQ Data ── */
const faqs = [
  {
    q: 'Can I start with just one service?',
    a: 'Yes. All plans include access to the four live services (OEE Manager, SQDCP Hub, Policy Deployment, and Action Manager). You can use as many or as few as you need. Usage limits vary by plan tier.',
  },
  {
    q: 'What happens when in-development services launch?',
    a: 'When services like SmartConnect, Quality Manager, Safety Manager, and Certification Manager go live, they will be added to the pricing tiers. Existing customers will receive early access and preferential pricing.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a guided demo and proof-of-concept period for qualified organisations. Contact our sales team to discuss your requirements and arrange a trial.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing period.',
  },
  {
    q: 'Do you offer discounts for non-profits or educational institutions?',
    a: 'Yes. We offer special pricing for non-profit organisations, educational institutions, and government bodies. Contact our sales team for details.',
  },
  {
    q: 'What support is included?',
    a: 'All plans include email support. Professional plans include priority support with faster response times. Enterprise plans include a dedicated account manager and custom SLA.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use enterprise-grade encryption, SOC 2 compliant infrastructure, and regular security audits. Your data is hosted in UK/EU data centres with full GDPR compliance.',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = annual ? annualPlans : monthlyPlans;

  // ROI calculator state
  const [roiSize, setRoiSize] = useState<CompanySize>('medium');
  const [roiInputs, setRoiInputs] = useState<ROIInputs>({
    size: 'medium',
    ...sizePresets.medium,
  });
  const roiResults = calculateROI(roiInputs);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSizeChange(size: CompanySize) {
    setRoiSize(size);
    setRoiInputs({ size, ...sizePresets[size] });
  }

  return (
    <MarketingLayout>
      <SEOHead
        title="Pricing"
        description="Simple, transparent pricing for Oplytics.digital. Start small, scale fast with plans for every manufacturing operation."
      />

      {/* ── 1. Header ── */}
      <section className="pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label text-[#8C34E9] mb-3 block">Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[#8890A0] mb-8">
            Start small, scale fast. All plans include access to live services with no hidden fees.
          </p>

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

      {/* ── 2. Pricing Grid ── */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" variant="slide-up" staggerDelay={0.1}>
          {plans.map((plan, i) => (
            <PricingTier key={i} plan={plan} />
          ))}
        </StaggerContainer>
      </section>

      {/* ── 3. Coming Soon Services ── */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* ── 4. ROI Calculator ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40" style={{ background: 'linear-gradient(180deg, #080C16 0%, #0D1220 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-[#1DB8CE]" />
              <span className="section-label text-[#1DB8CE]">ROI Calculator</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              Estimate Your Return on Investment
            </h2>
            <p className="text-[#8890A0] max-w-lg mx-auto">
              Select your organisation size to see estimated annual benefits, payback period, and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
                Your Organisation
              </h3>

              {/* Size selector */}
              <div className="space-y-3 mb-8">
                {(Object.keys(sizePresets) as CompanySize[]).map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                      roiSize === size
                        ? 'border-[#8C34E9] bg-[#8C34E9]/10 text-white'
                        : 'border-[#1E2738] text-[#8890A0] hover:border-[#596475]'
                    }`}
                  >
                    <div className="font-medium text-sm">{sizePresets[size].label}</div>
                    <div className="text-xs mt-1 opacity-70">
                      ~{sizePresets[size].headcount} employees · {sizePresets[size].lines} lines · {sizePresets[size].sites} site{sizePresets[size].sites > 1 ? 's' : ''}
                    </div>
                  </button>
                ))}
              </div>

              {/* Editable inputs */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-[#596475] uppercase tracking-wider block mb-1.5">Headcount</label>
                  <input
                    type="number"
                    value={roiInputs.headcount}
                    onChange={e => setRoiInputs(prev => ({ ...prev, headcount: parseInt(e.target.value) || 0 }))}
                    className="w-full bg-[#080C16] border border-[#1E2738] rounded-md px-3 py-2 text-white text-sm focus:border-[#8C34E9] focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#596475] uppercase tracking-wider block mb-1.5">Production Lines</label>
                    <input
                      type="number"
                      value={roiInputs.lines}
                      onChange={e => setRoiInputs(prev => ({ ...prev, lines: parseInt(e.target.value) || 0 }))}
                      className="w-full bg-[#080C16] border border-[#1E2738] rounded-md px-3 py-2 text-white text-sm focus:border-[#8C34E9] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#596475] uppercase tracking-wider block mb-1.5">Sites</label>
                    <input
                      type="number"
                      value={roiInputs.sites}
                      onChange={e => setRoiInputs(prev => ({ ...prev, sites: parseInt(e.target.value) || 0 }))}
                      className="w-full bg-[#080C16] border border-[#1E2738] rounded-md px-3 py-2 text-white text-sm focus:border-[#8C34E9] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {/* Main ROI card */}
              <div className="p-6 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/5">
                <div className="text-xs text-[#22C55E] uppercase tracking-widest mb-2 font-semibold">Estimated Annual ROI</div>
                <div className="text-5xl font-black text-[#22C55E] mb-1" style={{ fontFamily: 'Montserrat' }}>
                  {roiResults.roi}%
                </div>
                <div className="text-sm text-[#8890A0]">
                  Payback in <span className="text-white font-semibold">{roiResults.paybackMonths} month{roiResults.paybackMonths !== 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Benefit breakdown */}
              <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <div className="text-xs text-[#596475] uppercase tracking-widest mb-4 font-semibold">Annual Benefit Breakdown</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#8890A0]">Time savings (automated data collection)</span>
                    <span className="text-sm font-semibold text-white">£{roiResults.timeSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#8890A0]">Throughput gain (OEE improvement)</span>
                    <span className="text-sm font-semibold text-white">£{roiResults.throughputGain.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#8890A0]">Meeting efficiency gains</span>
                    <span className="text-sm font-semibold text-white">£{roiResults.meetingSavings.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-[#1E2738] pt-3 flex justify-between items-center">
                    <span className="text-sm font-semibold text-white">Total Annual Benefit</span>
                    <span className="text-lg font-bold text-[#1DB8CE]">£{roiResults.totalAnnualBenefit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#596475]">Estimated annual cost</span>
                    <span className="text-sm text-[#596475]">£{roiResults.estimatedAnnualCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#596475] leading-relaxed">
                Estimates are based on conservative industry benchmarks and may vary. Actual results depend on your specific operations, adoption rate, and implementation scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-[#F59E0B]" />
              <span className="section-label text-[#F59E0B]">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1E2738] bg-[#0D1220] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-[#8C34E9] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#596475] flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-[#8890A0] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Contact ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40" style={{ background: '#080C16' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-[#8C34E9] mb-3 block">Get In Touch</span>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              Need a Custom Quote?
            </h2>
            <p className="text-[#8890A0]">
              Tell us about your requirements and we will put together a tailored proposal.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-[#1E2738] bg-[#0D1220]">
            <ContactForm context="Pricing enquiry" />
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
