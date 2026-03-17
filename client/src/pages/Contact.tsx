/**
 * Contact Page — TASK-12
 * Design: "Neon Operations"
 *
 * Sections: Hero, ContactForm, Office info, Social links, Response time
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import ContactForm from '@/components/shared/ContactForm';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-[#C084FC]" />,
    iconBg: 'bg-[#8C34E9]/10',
    title: 'Speak to Paul',
    primary: 'paul@oplytics.digital',
    secondary: '',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#F59E0B]" />,
    iconBg: 'bg-[#F59E0B]/10',
    title: 'United Kingdom',
    primary: 'Headquarters',
    secondary: 'Serving manufacturers globally',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#1DB8CE]" />,
    iconBg: 'bg-[#1DB8CE]/10',
    title: 'South East Asia',
    primary: 'Regional Office',
    secondary: 'Supporting APAC operations',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#22C55E]" />,
    iconBg: 'bg-[#22C55E]/10',
    title: 'Europe',
    primary: 'Regional Office',
    secondary: 'Supporting European operations',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#22C55E]" />,
    iconBg: 'bg-[#22C55E]/10',
    title: 'Response Time',
    primary: 'Within 24 hours',
    secondary: 'We typically respond within one business day',
  },
];

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
        subtext="Whether you want a demo, have a question, or are ready to get started — we are here to help. Our team of manufacturing technology specialists is ready to discuss your requirements."
        status="live"
      />

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="slide-up" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            {/* Form */}
            <div>
              <div className="p-8 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="p-5 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                  <div className={`w-10 h-10 rounded-md ${item.iconBg} flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">{item.primary}</p>
                  {item.secondary && (
                    <p className="text-xs text-[#596475] mt-0.5">{item.secondary}</p>
                  )}
                </div>
              ))}

              {/* Social Links */}
              <div className="p-5 rounded-lg border border-[#1E2738] bg-[#0D1220]">
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
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </MarketingLayout>
  );
}
