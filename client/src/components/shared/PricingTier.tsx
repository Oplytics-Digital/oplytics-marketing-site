/**
 * TASK-06: PricingTier Component
 * Design: "Neon Operations" — pricing cards with highlight variant
 *
 * ONLY used on /pricing page. No pricing info on any other page.
 * Only shows Live services. In Development services listed separately with 'Coming Soon'.
 */
import { Link } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

interface PricingTierProps {
  plan: PricingPlan;
}

export default function PricingTier({ plan }: PricingTierProps) {
  const {
    name,
    price,
    period = '/month',
    description,
    features,
    highlighted = false,
    ctaLabel = 'See How It Works',
    ctaHref = '/contact',
  } = plan;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-lg border transition-all duration-300 ${
        highlighted
          ? 'border-[#8C34E9]/50 bg-[#0D1220] glow-purple-strong'
          : 'border-[#1E2738] bg-[#0D1220] hover:border-[#1E2738]/80'
      }`}
    >
      {/* Recommended badge */}
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white bg-[#8C34E9]">
            Recommended
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
        {name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>
          {price}
        </span>
        {period && (
          <span className="text-sm text-[#596475]">{period}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#8890A0] mb-6 leading-relaxed">{description}</p>

      <div className="h-px bg-[#1E2738] mb-6" />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
            <span className="text-sm text-[#8890A0]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-md text-sm font-bold tracking-wider transition-all duration-200 ${
          highlighted
            ? 'text-white hover:opacity-90'
            : 'text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/40 hover:text-white bg-[#0D1220]'
        }`}
        style={
          highlighted
            ? { background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }
            : undefined
        }
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
