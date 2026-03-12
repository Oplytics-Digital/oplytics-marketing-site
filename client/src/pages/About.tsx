/**
 * About Page — TASK-13
 * Design: "Neon Operations"
 *
 * Sections: Hero, Mission, Story, Values, Team, CTA
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';
import { Link } from 'wouter';
import { ArrowRight, Target, Zap, Users, Shield, TrendingUp, Globe } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6 text-[#F59E0B]" />,
    title: 'Purpose-Built',
    description: 'Every feature is designed specifically for manufacturing operations. We do not build generic tools and hope they fit.',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#8C34E9]" />,
    title: 'Simplicity First',
    description: 'Powerful does not mean complex. Our tools are intuitive enough for the manufacturing floor and sophisticated enough for the boardroom.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#1DB8CE]" />,
    title: 'People-Centred',
    description: 'Technology should empower people, not replace them. We build tools that amplify human expertise and decision-making.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#22C55E]" />,
    title: 'Trust and Transparency',
    description: 'We are honest about what our platform can and cannot do. No inflated claims, no misleading metrics, no hidden costs.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#EF4444]" />,
    title: 'Continuous Improvement',
    description: 'We practise what we preach. Our platform evolves through the same lean principles we help our customers implement.',
  },
  {
    icon: <Globe className="w-6 h-6 text-[#F97316]" />,
    title: 'Global Standards',
    description: 'Built to support ISO, IATF, and international manufacturing standards. Compliance is a feature, not an afterthought.',
  },
];

const teamMembers = [
  {
    name: 'Paul Anderson',
    role: 'Founder and CEO',
    bio: 'Manufacturing technology specialist with over 15 years of experience in operational excellence and digital transformation across automotive, aerospace, and FMCG sectors.',
  },
];

export default function About() {
  return (
    <MarketingLayout>
      <SEOHead
        title="About"
        description="Learn about Oplytics.digital — the operational excellence platform built by manufacturing professionals for manufacturing professionals."
      />

      {/* Hero */}
      <HeroSection
        headline="About Oplytics"
        subtext="We are building the operational excellence platform that manufacturers actually need — purpose-built, AI-powered, and designed for the manufacturing floor."
        status="live"
      />

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E2738]/40">
        <AnimateOnScroll variant="slide-up" className="max-w-4xl mx-auto text-center">
          <span className="section-label text-[#8C34E9] mb-4 block">Our Mission</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
            Digitise Operational Excellence for Every Manufacturer
          </h2>
          <p className="text-lg text-[#A0A8B8] leading-relaxed max-w-3xl mx-auto">
            Too many manufacturers are still running their operations on whiteboards, spreadsheets, and disconnected systems.
            Critical data is trapped in silos. Improvement initiatives lose momentum. Strategic plans never reach the manufacturing floor.
            We are changing that — one service at a time.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #080C16 0%, #0D1220 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <span className="section-label text-[#1DB8CE] mb-4 block">Our Story</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat' }}>
            Born on the Manufacturing Floor
          </h2>
          <div className="space-y-5 text-[#A0A8B8] leading-relaxed">
            <p>
              Oplytics was founded by manufacturing professionals who spent years implementing lean and operational excellence
              programmes across some of the world's most demanding production environments. We saw the same problems everywhere:
              brilliant improvement methodologies undermined by poor tooling.
            </p>
            <p>
              SQDCP boards that nobody updated. OEE data collected manually and entered into spreadsheets hours after the shift ended.
              Hoshin plans that were reviewed once a quarter and forgotten in between. Actions from audits that disappeared into email threads.
            </p>
            <p>
              We built Oplytics because we could not find a platform that understood manufacturing operations deeply enough to
              digitise them properly. Not a generic project management tool with a manufacturing skin. Not an ERP bolt-on that
              requires six months of consulting to configure. A purpose-built platform that works the way manufacturers already think.
            </p>
            <p>
              Today, Oplytics provides eight integrated services — from real-time OEE tracking to AI-powered policy deployment —
              all built on a single platform with a shared data model. When an OEE loss triggers an action, that action flows into
              the SQDCP board, links to the relevant Hoshin objective, and tracks through to verified closure. That is the integration
              manufacturers have been waiting for.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-[#22C55E] mb-4 block">Our Values</span>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              What We Stand For
            </h2>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.08}>
            {values.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-[#8C34E9]/20 transition-colors"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                  {value.title}
                </h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-[#F59E0B] mb-4 block">Our Team</span>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              Led by Manufacturing Experts
            </h2>
            <p className="text-[#8890A0] max-w-lg mx-auto">
              Our team combines deep manufacturing domain expertise with modern software engineering.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {teamMembers.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#080C16' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Ready to Transform Your Operations?
          </h2>
          <p className="text-[#8890A0] mb-8 max-w-lg mx-auto">
            See how Oplytics can help your manufacturing organisation achieve operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold border border-[#1E2738] hover:border-[#8C34E9]/40 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
