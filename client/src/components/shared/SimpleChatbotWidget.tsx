/**
 * TASK-08: SimpleChatbotWidget Component (Minimal Link-Based)
 * Design: "Neon Operations" — floating purple button with quick action links
 *
 * Floating button in bottom-right corner.
 * Expands to show 3-4 quick action links.
 * No backend or LLM integration.
 * Placeholder for future AI chatbot.
 */
import { useState } from 'react';
import { Link } from 'wouter';
import { MessageCircle, X, Calendar, DollarSign, Mail, HelpCircle } from 'lucide-react';

const quickActions = [
  { label: 'Book a Demo', href: '/contact', icon: Calendar, description: 'Schedule a walkthrough' },
  { label: 'View Pricing', href: '/pricing', icon: DollarSign, description: 'See our plans' },
  { label: 'Contact Sales', href: '/contact', icon: Mail, description: 'Talk to our team' },
  { label: 'What is Oplytics?', href: '/', icon: HelpCircle, description: 'Learn about us' },
];

export default function SimpleChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Panel */}
      {open && (
        <div className="absolute bottom-16 right-0 w-72 bg-[#0D1220] border border-[#1E2738] rounded-lg shadow-2xl overflow-hidden mb-2">
          <div className="p-4 border-b border-[#1E2738]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                  How can we help?
                </h4>
                <p className="text-xs text-[#596475]">Quick links to get started</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#596475] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-2">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[#1E2738]/60 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-[#8C34E9]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8C34E9]/20 transition-colors">
                  <action.icon className="w-4 h-4 text-[#C084FC]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{action.label}</div>
                  <div className="text-xs text-[#596475]">{action.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 glow-purple"
        style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
