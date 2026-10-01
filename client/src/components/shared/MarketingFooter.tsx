/**
 * TASK-03/30/31: Standardised MarketingFooter Component
 * Design: "Neon Operations" — dark footer: brand, core platform, legal
 * Includes Cookie Settings link (TASK-30) and Resources link (TASK-31).
 */
import { Link } from "wouter";
import { coreServices, getServiceStatusColor } from "@/config/services";
import { reopenCookieConsent } from "./CookieConsent";

// OplyticsConnect stays in the services config (header, homepage, solution
// pages) but is left out of the footer (#211).
const footerCoreServices = coreServices.filter(s => s.id !== "smartconnect");

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/aup", label: "Acceptable Use Policy" },
  { href: "/dpa", label: "Data Processing Agreement" },
  { href: "/sla", label: "Service Level Agreement" },
];

export default function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#1E2738]/60"
      style={{ background: "#080C16" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Copyright */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <svg
                className="w-8 h-8 shrink-0"
                viewBox="0 0 120 120"
                role="img"
                aria-label="Oplytics"
              >
                <defs>
                  <linearGradient
                    id="oplytics-footer-mark"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0" stopColor="#8C34E9" />
                    <stop offset="1" stopColor="#5B1FA6" />
                  </linearGradient>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  fill="url(#oplytics-footer-mark)"
                />
                <g fill="none" stroke="#0A0E1A" strokeWidth="8">
                  <circle cx="60" cy="60" r="34" />
                  <circle cx="60" cy="60" r="17" />
                </g>
                <circle cx="77" cy="43" r="9" fill="#1DB8CE" />
              </svg>
              <span
                className="text-base font-extrabold text-white"
                style={{ fontFamily: "Montserrat" }}
              >
                Oplytics
                <span className="font-light text-[#596475]">.digital</span>
              </span>
            </Link>
            <p className="text-sm text-[#596475] leading-relaxed max-w-xs">
              Operational Excellence. One Digital Platform.
            </p>
            <p className="text-xs text-[#596475]">
              &copy; {currentYear} Oplytics Digital Ltd. All rights reserved.
            </p>
          </div>

          {/* Column 2: Core Platform */}
          <div>
            <span className="section-label text-[#8C34E9] mb-4 block">
              Core Platform
            </span>
            <ul className="space-y-3">
              {footerCoreServices.map(service => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: getServiceStatusColor(service.status),
                      }}
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <span className="section-label text-[#596475] mb-4 block">
              Legal
            </span>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — pb-44 keeps these links clear of the fixed "Ask Opi"
          launcher and its greeting nudge (bottom-6 right-6, ~155px tall together)
          when scrolled to the very bottom. */}
      <div className="border-t border-[#1E2738]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-44 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#596475]">
            Operational Excellence. One Digital Platform.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-[#596475] hover:text-[#8890A0] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#596475] hover:text-[#8890A0] transition-colors"
            >
              Terms
            </Link>
            <button
              onClick={reopenCookieConsent}
              className="text-xs text-[#596475] hover:text-[#8890A0] transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
