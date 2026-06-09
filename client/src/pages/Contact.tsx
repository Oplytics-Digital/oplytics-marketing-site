/**
 * Contact Page — TASK-12
 * Design: "Neon Operations"
 *
 * Single focused goal: make it compellingly easy to send a message.
 * Sections: Hero, centered ContactForm, subtle email fallback, social links.
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import ContactForm from '@/components/shared/ContactForm';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn — Coming Soon', href: '#' },
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram — Coming Soon', href: '#' },
];

export default function Contact() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Contact"
        description="Get in touch with the Oplytics team. Request a demo, ask a question, or discuss your manufacturing operations requirements."
      />

      {/* Hero */}
      <HeroSection
        headline="Get in Touch"
        subtext="Tell us about your operation and we'll be in touch."
        status="live"
      />

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="slide-up" className="max-w-2xl mx-auto">
          {/* Form */}
          <div className="p-8 rounded-lg border border-[#1E2738] bg-[#0D1220]">
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Email fallback */}
          <p className="text-xs text-[#596475] text-center mt-4">
            Prefer email?{' '}
            <a
              href="mailto:paul@oplytics.digital"
              className="text-[#8890A0] hover:text-[#C084FC] transition-colors"
            >
              paul@oplytics.digital
            </a>
          </p>

          {/* Social Links */}
          <div className="flex flex-col items-center mt-10">
            <h3 className="text-sm font-semibold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-md bg-[#1E2738] flex items-center justify-center text-[#596475] cursor-default"
                  title={link.label}
                >
                  {link.icon}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#596475] mt-2 tracking-wider uppercase">Coming Soon</p>
          </div>
        </AnimateOnScroll>
      </section>
    </MarketingLayout>
  );
}
