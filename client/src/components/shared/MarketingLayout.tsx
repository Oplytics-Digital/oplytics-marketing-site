/**
 * MarketingLayout — wraps all marketing pages with shared header, footer, and chatbot.
 * Ensures consistent structure across all 16 pages.
 */
import { type ReactNode } from 'react';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';
import SimpleChatbotWidget from './SimpleChatbotWidget';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0A0E1A', color: '#E2E8F0' }}>
      <MarketingHeader />
      <main className="flex-1">
        {children}
      </main>
      <MarketingFooter />
      <SimpleChatbotWidget />
    </div>
  );
}
