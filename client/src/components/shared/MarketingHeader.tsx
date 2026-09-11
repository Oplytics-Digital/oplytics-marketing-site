/**
 * TASK-02: Standardised MarketingHeader Component
 * Design: "Neon Operations" — sticky dark header with glow accents
 * Used identically on all pages.
 *
 * Layout: Logo | Solutions (dropdown with core/hub delineation) | Why Us | Contact | Sign In
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  coreServices,
  hubServices,
  services,
  getServiceStatusColor,
} from "@/config/services";

export default function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path;

  const navLinkClass = (path: string) =>
    `text-xs font-medium tracking-wide transition-colors duration-200 ${
      isActive(path) ? "text-white" : "text-[#8890A0] hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C16]/95 backdrop-blur-md border-b border-[#1E2738]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg
              className="w-8 h-8 shrink-0"
              viewBox="0 0 120 120"
              role="img"
              aria-label="Oplytics"
            >
              <defs>
                <linearGradient
                  id="oplytics-header-mark"
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
                fill="url(#oplytics-header-mark)"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
                  location.startsWith("/solutions")
                    ? "text-white"
                    : "text-[#8890A0] hover:text-white"
                }`}
              >
                Solutions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[440px] bg-[#0D1220] border border-[#1E2738] rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-4">
                    {/* Core Services */}
                    <div className="mb-3">
                      <span className="section-label text-[#8C34E9] mb-2 block">
                        Core Platform
                      </span>
                      <div className="space-y-1">
                        {coreServices.map(service => (
                          <Link
                            key={service.id}
                            href={`/solutions/${service.slug}`}
                            data-umami-event="nav_click"
                            data-umami-event-service={service.slug}
                            data-umami-event-location="header_dropdown"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[#1E2738]/60 transition-colors group"
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                background: getServiceStatusColor(
                                  service.status
                                ),
                              }}
                            />
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#C084FC] transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-[#596475]">
                                {service.tagline}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-[#1E2738] my-3" />

                    {/* Hub Services */}
                    <div>
                      <span className="section-label text-[#1DB8CE] mb-2 block">
                        Specialist Hubs
                      </span>
                      <div className="space-y-1">
                        {hubServices.map(service => (
                          <Link
                            key={service.id}
                            href={`/solutions/${service.slug}`}
                            data-umami-event="nav_click"
                            data-umami-event-service={service.slug}
                            data-umami-event-location="header_dropdown"
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1E2738]/60 transition-colors group"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background: getServiceStatusColor(
                                  service.status
                                ),
                              }}
                            />
                            <span className="text-xs font-medium text-[#8890A0] group-hover:text-white transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/obeya" className={navLinkClass("/obeya")}>
              Obeya
            </Link>
            <Link href="/ai" className={navLinkClass("/ai")}>
              AI
            </Link>
            <Link href="/why-us" className={navLinkClass("/why-us")}>
              Why Us
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link href="/resources" className={navLinkClass("/resources")}>
              Resources
            </Link>
            <Link href="/pricing" className={navLinkClass("/pricing")}>
              Pricing
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>

            <Link
              href="/login"
              data-umami-event="cta_click"
              data-umami-event-button="sign_in"
              data-umami-event-location="header"
              className="px-5 py-2 rounded-md text-xs font-bold text-white tracking-wider transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
              }}
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#8890A0] hover:text-white transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080C16]/98 backdrop-blur-md border-t border-[#1E2738]/60">
          <div className="px-4 py-6 space-y-4">
            {/* Core Services */}
            <div>
              <span className="section-label text-[#8C34E9] mb-2 block">
                Core Platform
              </span>
              <div className="space-y-1 ml-2">
                {coreServices.map(service => (
                  <Link
                    key={service.id}
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-2 py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: getServiceStatusColor(service.status),
                      }}
                    />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#1E2738]" />

            {/* Hub Services */}
            <div>
              <span className="section-label text-[#1DB8CE] mb-2 block">
                Specialist Hubs
              </span>
              <div className="space-y-1 ml-2">
                {hubServices.map(service => (
                  <Link
                    key={service.id}
                    href={`/solutions/${service.slug}`}
                    className="flex items-center gap-2 py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: getServiceStatusColor(service.status),
                      }}
                    />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#1E2738]" />

            <Link
              href="/obeya"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Obeya Room
            </Link>
            <Link
              href="/ai"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Platform AI
            </Link>
            <Link
              href="/why-us"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm text-[#8890A0] hover:text-white transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/login"
              data-umami-event="cta_click"
              data-umami-event-button="sign_in"
              data-umami-event-location="header_mobile"
              className="block w-full text-center px-5 py-3 rounded-md text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
