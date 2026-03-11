/**
 * TASK-04: Hero Section Component (Live / In-Development variants)
 * Design: "Neon Operations" — atmospheric hero with status-driven CTAs
 *
 * Live variant CTAs: 'Get Started', 'View Plans' (links to /pricing)
 * In Development variant CTAs: 'Request Early Access', 'Join Waitlist'
 * Status badge: none for Live, purple 'In Development' badge for in-dev
 * Status driven by service config — no manual per-page edits.
 */
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import type { ServiceStatus } from '@/config/services';

interface HeroSectionProps {
  headline: string;
  subtext: string;
  status: ServiceStatus;
  backgroundImage?: string;
  /** Override CTAs if needed */
  customCtas?: { label: string; href: string; variant: 'primary' | 'secondary' }[];
}

export default function HeroSection({ headline, subtext, status, backgroundImage, customCtas }: HeroSectionProps) {
  const isLive = status === 'live';

  const defaultCtas = isLive
    ? [
        { label: 'Get Started', href: '/contact', variant: 'primary' as const },
        { label: 'View Plans', href: '/pricing', variant: 'secondary' as const },
      ]
    : [
        { label: 'Request Early Access', href: '/contact', variant: 'primary' as const },
        { label: 'Join Waitlist', href: '/contact', variant: 'secondary' as const },
      ];

  const ctas = customCtas || defaultCtas;

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080C16]/60 via-[#0A0E1A]/80 to-[#0A0E1A]" />
        </div>
      )}

      {/* Radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-radial-purple" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        {!isLive && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-[#8C34E9]/30 bg-[#8C34E9]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C34E9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C34E9]" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C084FC]">
              In Development
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
          style={{ fontFamily: 'Montserrat' }}
        >
          {headline}
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#8890A0] leading-relaxed max-w-2xl mx-auto mb-10">
          {subtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctas.map((cta, i) => (
            <Link
              key={i}
              href={cta.href}
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold tracking-wider transition-all duration-200 ${
                cta.variant === 'primary'
                  ? 'text-white hover:opacity-90 glow-purple'
                  : 'text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/40 hover:text-white bg-[#0D1220]/60'
              }`}
              style={
                cta.variant === 'primary'
                  ? { background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }
                  : undefined
              }
            >
              {cta.label}
              {cta.variant === 'primary' && <ArrowRight className="w-4 h-4" />}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
