/**
 * MarketingLayout — wraps all marketing pages with shared header, footer, chatbot, and cookie consent.
 * Ensures consistent structure, accessibility landmarks, and skip navigation across all pages.
 */
import { type ReactNode } from 'react';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';
import AISupportEngineer from './AISupportEngineer';
import CookieConsent from './CookieConsent';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0A0E1A', color: '#E2E8F0' }}>
      {/* Skip to content — accessible keyboard shortcut */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <MarketingHeader />

      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      <MarketingFooter />
      <AISupportEngineer />
      <CookieConsent />
    </div>
  );
}
