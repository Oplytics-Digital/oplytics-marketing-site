/**
 * TASK-03: Standardised MarketingFooter Component
 * Design: "Neon Operations" — dark footer with grouped service links
 * Used identically on all 16 pages.
 *
 * Layout: Logo + copyright | Service links (grouped) | Legal links
 */
import { Link } from 'wouter';
import { liveServices, inDevServices, getServiceStatusColor } from '@/config/services';

export default function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E2738]/60" style={{ background: '#080C16' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Copyright */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#8C34E9' }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>O</span>
              </div>
              <span className="text-base font-extrabold text-white" style={{ fontFamily: 'Montserrat' }}>
                Oplytics<span className="font-light text-[#596475]">.digital</span>
              </span>
            </Link>
            <p className="text-sm text-[#596475] leading-relaxed max-w-xs">
              Operational excellence platform for manufacturing. Real-time visibility, digital management, and continuous improvement.
            </p>
            <p className="text-xs text-[#596475]">
              &copy; {currentYear} Oplytics.digital. All rights reserved.
            </p>
          </div>

          {/* Column 2: Live Services */}
          <div>
            <span className="section-label text-[#22C55E] mb-4 block">Live Services</span>
            <ul className="space-y-3">
              {liveServices.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: getServiceStatusColor('live') }} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: In Development Services */}
          <div>
            <span className="section-label text-[#8C34E9] mb-4 block">In Development</span>
            <ul className="space-y-3">
              {inDevServices.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: getServiceStatusColor('in-development') }} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Links */}
          <div>
            <span className="section-label text-[#596475] mb-4 block">Company</span>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-[#8890A0] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-sm text-[#8890A0] hover:text-white transition-colors">
                  Why Oplytics
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-[#8890A0] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#8890A0] hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/status" className="flex items-center gap-2 text-sm text-[#8890A0] hover:text-white transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
                  </span>
                  Service Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2738]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#596475]">
            Built for operational excellence in manufacturing.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#596475] hover:text-[#8890A0] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-[#596475] hover:text-[#8890A0] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
