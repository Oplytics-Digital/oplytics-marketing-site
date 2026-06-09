/**
 * MarketingAssistant — the public-facing AI bot for the marketing site.
 *
 * Replaces the old AISupportEngineer (a flat purple circle + Lucide glyph) with
 * a branded, animated gradient "orb" identity and a warmer first-run experience.
 *
 * Phase 0+1 of the marketing-AI roadmap:
 *  - Animated conic-gradient orb launcher + in-chat avatars (Siri/Copilot style)
 *  - Suggested prompts so the conversation never starts cold
 *  - Proactive greeting nudge after a short dwell
 *  - Perceived streaming via a typewriter reveal over the existing (non-streaming)
 *    POST /api/ai/chat endpoint. True server token-streaming (SSE) is a Phase 2
 *    backend item.
 *
 * Talks to the same REST endpoint as before, so no server changes are required.
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Loader2, User, Sparkles } from 'lucide-react';
import { Streamdown } from 'streamdown';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

const SUGGESTED_PROMPTS = [
  'What does Oplytics do?',
  'How does OEE Manager work?',
  'Can it integrate with our ERP?',
  'Book a demo',
];

const GREETING =
  "Hi 👋 I'm Opi, your Oplytics guide. Ask me anything — what we do, how it works, or book a demo.";

/** Brand-coloured animated gradient orb. Used for the launcher and the avatars. */
function Orb({
  size = 56,
  active = false,
  className = '',
}: {
  size?: number;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`oa-orb ${active ? 'oa-orb--active' : ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="oa-orb__core" />
      <span className="oa-orb__sheen" />
    </span>
  );
}

export default function MarketingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Text currently being "typed out" for the latest assistant reply.
  const [streamingText, setStreamingText] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Proactive greeting nudge — fire once, a few seconds after landing.
  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => setShowNudge(true), 3000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  // Keep the latest message in view as content streams in.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streamingText, isLoading]);

  // Clean up the typewriter interval on unmount.
  useEffect(() => {
    return () => {
      if (typewriterRef.current) clearInterval(typewriterRef.current);
    };
  }, []);

  const openPanel = () => {
    setIsOpen(true);
    setHasOpened(true);
    setShowNudge(false);
  };

  /** Reveal an assistant reply character-by-character for a "live" feel. */
  const typewriterReveal = useCallback((full: string) => {
    if (typewriterRef.current) clearInterval(typewriterRef.current);
    setStreamingText('');
    let i = 0;
    // Reveal a few chars per tick so long answers don't crawl.
    const stepSize = Math.max(1, Math.round(full.length / 240));
    typewriterRef.current = setInterval(() => {
      i += stepSize;
      if (i >= full.length) {
        if (typewriterRef.current) clearInterval(typewriterRef.current);
        setStreamingText(null);
        setMessages((prev) => [...prev, { role: 'assistant', content: full }]);
      } else {
        setStreamingText(full.slice(0, i));
      }
    }, 16);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading || streamingText !== null) return;

      const userMessage: Message = { role: 'user', content: trimmed };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setInput('');
      setIsLoading(true);

      try {
        const response = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: newMessages,
            page: typeof window !== 'undefined' ? window.location.pathname : undefined,
          }),
        });
        if (!response.ok) throw new Error('Failed to chat');
        const data = await response.json();
        typewriterReveal(data.content);
      } catch (error) {
        console.error('Chat error:', error);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "Sorry mate, I've hit a bit of a snag. Give it another go?",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, streamingText, typewriterReveal]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const busy = isLoading || streamingText !== null;

  return (
    <>
      <style>{ORB_STYLES}</style>

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
        {/* ─── Open chat panel ─── */}
        {isOpen && (
          <div
            className="oa-panel flex w-[92vw] max-w-[400px] flex-col overflow-hidden rounded-2xl"
            style={{ height: 'min(560px, 75vh)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between gap-3 px-4 py-3.5"
              style={{
                background: 'linear-gradient(135deg, rgba(140,52,233,0.22), rgba(29,184,206,0.14))',
                borderBottom: '1px solid #1E2738',
              }}
            >
              <div className="flex items-center gap-3">
                <Orb size={36} active={busy} />
                <div>
                  <h3 className="text-sm font-bold leading-none text-white" style={{ fontFamily: 'Montserrat' }}>
                    Opi
                  </h3>
                  <p className="mt-1 text-[11px] text-white/55">Oplytics AI guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="custom-scrollbar flex-1 space-y-4 overflow-y-auto p-4">
              {messages.length === 0 && (
                <div className="space-y-4 py-4 text-center">
                  <Orb size={64} className="mx-auto" />
                  <p className="px-4 text-sm leading-relaxed text-white/80">{GREETING}</p>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-white/40">
                    Here's what I can help with
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {SUGGESTED_PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => send(p)}
                        className="rounded-full border border-[#1E2738] bg-[#0D1220] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-[#8C34E9] hover:text-white"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <MessageRow key={i} role={msg.role}>
                  {msg.content}
                </MessageRow>
              ))}

              {/* Live typewriter reveal of the latest assistant reply */}
              {streamingText !== null && <MessageRow role="assistant">{streamingText}</MessageRow>}

              {/* Thinking indicator (before the first token arrives) */}
              {isLoading && streamingText === null && (
                <div className="flex items-start gap-3">
                  <Orb size={32} active className="shrink-0" />
                  <div className="rounded-2xl rounded-tl-sm border border-[#1E2738] bg-[#0D1220] px-3 py-2.5">
                    <Loader2 className="h-4 w-4 animate-spin text-white/50" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-[#1E2738] bg-[#080C16] p-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Opi anything…"
                  className="max-h-[120px] min-h-[40px] flex-1 resize-none rounded-lg border border-[#1E2738] bg-[#0D1220] px-3 py-2 text-sm text-white placeholder-[#596475] focus:border-[#8C34E9] focus:outline-none"
                  rows={1}
                />
                <button
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #8C34E9, #1DB8CE)' }}
                  onClick={() => send(input)}
                  disabled={!input.trim() || busy}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/30">
                Opi can make mistakes — verify anything important.
              </p>
            </div>
          </div>
        )}

        {/* ─── Proactive greeting nudge ─── */}
        {!isOpen && showNudge && (
          <button
            onClick={openPanel}
            className="oa-nudge flex max-w-[240px] items-center gap-2 rounded-2xl rounded-br-sm border border-[#1E2738] bg-[#0D1220] px-3.5 py-2.5 text-left text-xs font-medium text-white shadow-xl"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#1DB8CE]" />
            Questions about Oplytics? I can help 👋
          </button>
        )}

        {/* ─── Launcher: orb + persistent "Ask Opi" label ─── */}
        {!isOpen && (
          <button onClick={openPanel} aria-label="Ask Opi — open AI assistant" className="oa-launcher">
            <span className="oa-launcher__orb">
              <span className="oa-launcher__ping" aria-hidden />
              <Orb size={48} />
            </span>
            <span className="oa-launcher__label">Ask Opi</span>
          </button>
        )}
      </div>
    </>
  );
}

/** A single chat row with the appropriate avatar + bubble styling. */
function MessageRow({ role, children }: { role: Message['role']; children: string }) {
  const isUser = role === 'user';
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <Orb size={32} className="shrink-0" />}
      <div
        className={`max-w-[80%] px-3 py-2.5 text-sm leading-relaxed ${
          isUser ? 'rounded-2xl rounded-tr-sm text-white' : 'rounded-2xl rounded-tl-sm text-[#E2E8F0]'
        }`}
        style={
          isUser
            ? { background: 'linear-gradient(135deg, #8C34E9, #5B1FA6)' }
            : { background: '#0D1220', border: '1px solid #1E2738' }
        }
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{children}</p>
        ) : (
          <div className="oa-prose prose prose-sm prose-invert max-w-none">
            <Streamdown>{children}</Streamdown>
          </div>
        )}
      </div>
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E2738]">
          <User className="h-4 w-4 text-[#596475]" />
        </div>
      )}
    </div>
  );
}

const ORB_STYLES = `
@keyframes oa-spin { to { transform: rotate(360deg); } }
@keyframes oa-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
@keyframes oa-pop { 0% { opacity: 0; transform: translateY(8px) scale(.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes oa-ping { 0% { transform: scale(1); opacity: .5; } 70%,100% { transform: scale(2); opacity: 0; } }
@keyframes oa-glow { 0%,100% { filter: drop-shadow(0 6px 18px rgba(140,52,233,0.40)); } 50% { filter: drop-shadow(0 8px 26px rgba(29,184,206,0.55)); } }
@keyframes oa-bounce-in { 0% { opacity: 0; transform: translateY(14px) scale(.85); } 60% { transform: translateY(-3px) scale(1.03); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

.oa-orb { position: relative; display: inline-block; border-radius: 9999px; flex: none;
  animation: oa-breathe 4s ease-in-out infinite; }
.oa-orb__core { position: absolute; inset: 0; border-radius: 9999px;
  background: conic-gradient(from 0deg, #8C34E9, #1DB8CE, #8C34E9);
  animation: oa-spin 6s linear infinite;
  box-shadow: 0 0 18px rgba(140,52,233,0.45), 0 0 8px rgba(29,184,206,0.4); }
.oa-orb__sheen { position: absolute; inset: 18%; border-radius: 9999px;
  background: radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 45%, transparent 60%);
  mix-blend-mode: screen; }
.oa-orb--active { animation-duration: 1.6s; }
.oa-orb--active .oa-orb__core { animation-duration: 2s; }

/* Launcher: orb + persistent "Ask Opi" label, with a gentle pulse, glow and entrance bounce. */
.oa-launcher { display: flex; align-items: center; gap: 10px;
  padding: 8px 18px 8px 8px; border-radius: 9999px;
  background: rgba(13,18,32,0.82); border: 1px solid #1E2738;
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  animation: oa-bounce-in .55s cubic-bezier(.34,1.56,.64,1) backwards,
             oa-glow 3.4s ease-in-out .6s infinite;
  transition: transform .25s ease, border-color .25s ease; }
.oa-launcher:hover { transform: scale(1.04); border-color: #8C34E9; }
.oa-launcher__orb { position: relative; display: inline-flex; line-height: 0; }
.oa-launcher__ping { position: absolute; inset: 0; border-radius: 9999px;
  border: 2px solid rgba(140,52,233,0.6); pointer-events: none;
  animation: oa-ping 2.6s cubic-bezier(0,0,.2,1) infinite; }
.oa-launcher__label { font-size: 14px; font-weight: 600; color: #fff;
  white-space: nowrap; letter-spacing: .01em; }
.oa-nudge { animation: oa-pop .3s ease-out both; }
.oa-panel { background: #080C16; border: 1px solid #1E2738;
  box-shadow: 0 24px 64px rgba(0,0,0,0.6); animation: oa-pop .3s ease-out both; }
.oa-prose p { margin: 0; }
.oa-prose p + p { margin-top: .5rem; }
.oa-prose a { color: #1DB8CE; }

/* Respect users who prefer reduced motion — keep it calm and static. */
@media (prefers-reduced-motion: reduce) {
  .oa-orb, .oa-orb__core, .oa-launcher, .oa-launcher__ping, .oa-nudge, .oa-panel {
    animation: none !important;
  }
}
`;
