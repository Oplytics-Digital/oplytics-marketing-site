/**
 * Batch 3: AI Support Engineer Widget (Redesigned)
 * Larger, more prominent floating widget with:
 * - "AI Support Engineer" label
 * - AI theme colour (#1DB8CE) matching the "AI-Powered Platform" badge
 * - Mock text input (no backend yet)
 * - Avatar icon
 */
import { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const suggestedQuestions = [
  'What is Policy Deployment?',
  'How does OEE Manager work?',
  'Can Oplytics integrate with our ERP?',
  'What does the AI Support Engineer do?',
];

export default function SimpleChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    setOpen(!open);
    setShowPulse(false);
  };

  const handleSend = (text?: string) => {
    const question = text || inputValue.trim();
    if (!question) return;
    setMessages(prev => [
      ...prev,
      { role: 'user', text: question },
      { role: 'ai', text: 'Thanks for your question! The AI Support Engineer is currently being trained on the Oplytics platform. In the meantime, our team would love to help — get in touch via the Contact page.' },
    ]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Expanded Panel */}
      {open && (
        <div
          className="absolute bottom-20 right-0 w-80 sm:w-96 bg-[#0D1220] border border-[#1DB8CE]/20 rounded-xl overflow-hidden mb-2"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(29,184,206,0.12)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-[#1E2738]" style={{ background: 'linear-gradient(135deg, #1DB8CE 0%, #0E8A9A 100%)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
                    AI Support Engineer
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
                    </span>
                    <span className="text-[10px] text-white/70">Training in progress</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <>
                {/* Welcome message */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1DB8CE]/15 flex items-center justify-center flex-shrink-0 border border-[#1DB8CE]/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#1DB8CE]" />
                  </div>
                  <div className="bg-[#1E2738]/60 rounded-lg rounded-tl-none px-3 py-2.5 max-w-[85%]">
                    <p className="text-xs text-[#A0A8B8] leading-relaxed">
                      Hello! I'm the Oplytics AI Support Engineer. I'm currently being trained on the full platform. Try asking a question below, or speak to our team directly.
                    </p>
                  </div>
                </div>

                {/* Suggested questions */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[10px] font-medium text-[#596475] uppercase tracking-wider px-1">Suggested questions</p>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="w-full text-left px-3 py-2 rounded-lg border border-[#1DB8CE]/10 bg-[#1DB8CE]/5 hover:bg-[#1DB8CE]/10 hover:border-[#1DB8CE]/25 transition-all text-xs text-[#A0A8B8] hover:text-white flex items-center justify-between group"
                    >
                      <span>{q}</span>
                      <ArrowRight className="w-3 h-3 text-[#1DB8CE] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {msg.role === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-[#1DB8CE]/15 flex items-center justify-center flex-shrink-0 border border-[#1DB8CE]/20">
                        <Sparkles className="w-3.5 h-3.5 text-[#1DB8CE]" />
                      </div>
                    )}
                    <div
                      className={`rounded-lg px-3 py-2.5 max-w-[85%] ${
                        msg.role === 'user'
                          ? 'bg-[#1DB8CE]/15 rounded-tr-none border border-[#1DB8CE]/20'
                          : 'bg-[#1E2738]/60 rounded-tl-none'
                      }`}
                    >
                      <p className="text-xs text-[#A0A8B8] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-[#1E2738]">
            <div className="flex items-center gap-2 bg-[#080C16] rounded-lg border border-[#1E2738] focus-within:border-[#1DB8CE]/40 transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-sm text-white placeholder-[#596475] px-3 py-2.5 outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="p-2 mr-1 rounded-md bg-[#1DB8CE]/15 text-[#1DB8CE] hover:bg-[#1DB8CE]/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-center">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-[10px] text-[#1DB8CE] hover:text-[#1DB8CE]/80 transition-colors"
              >
                Prefer to speak to a human? Contact us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button — larger with label */}
      <div className="relative">
        {showPulse && !open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#1DB8CE' }} />
        )}
        <button
          onClick={handleToggle}
          className="relative flex items-center gap-2.5 rounded-full text-white transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #1DB8CE 0%, #0E8A9A 100%)',
            boxShadow: '0 4px 24px rgba(29,184,206,0.35), 0 0 40px rgba(29,184,206,0.12)',
            padding: open ? '14px' : '14px 20px 14px 16px',
          }}
          aria-label="Open AI Support Engineer"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold hidden sm:inline" style={{ fontFamily: 'Montserrat' }}>
                AI Support Engineer
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
