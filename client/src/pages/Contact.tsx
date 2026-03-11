/**
 * Contact Page
 * Design: "Neon Operations"
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import ContactForm from '@/components/shared/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <MarketingLayout>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-[#8C34E9] mb-3 block">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Let's Talk
            </h1>
            <p className="text-lg text-[#8890A0] max-w-xl mx-auto">
              Whether you want a demo, have a question, or are ready to get started — we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Form */}
            <div className="p-8 rounded-lg border border-[#1E2738] bg-[#0D1220]">
              <ContactForm />
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <div className="w-10 h-10 rounded-md bg-[#8C34E9]/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[#C084FC]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Email Us
                </h3>
                <p className="text-sm text-[#8890A0]">hello@oplytics.digital</p>
              </div>

              <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <div className="w-10 h-10 rounded-md bg-[#1DB8CE]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#1DB8CE]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Location
                </h3>
                <p className="text-sm text-[#8890A0]">United Kingdom</p>
              </div>

              <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]">
                <div className="w-10 h-10 rounded-md bg-[#22C55E]/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#22C55E]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Response Time
                </h3>
                <p className="text-sm text-[#8890A0]">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
