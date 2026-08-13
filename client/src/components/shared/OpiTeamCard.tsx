/**
 * OpiTeamCard — sells Opi as a live AI teammate, not a feature checkbox.
 * Reuses the exact orb identity from MarketingAssistant.tsx (conic-gradient
 * spin + sheen + breathe) so Opi reads as the same character everywhere on
 * the site — the chat launcher, the in-app Opi Insights sidebar, and here.
 * Floating insight cards echo the real callouts already shipping in-product
 * (services.ts's demoScreenshots captions — "Opi Insights", "Opi Coaching",
 * "AI Facilitator") rather than invented examples.
 */
import { motion, useReducedMotion } from 'framer-motion';

const INSIGHT_CARDS = [
  { label: 'AI Facilitator', text: 'Root cause drafted — starter 5-Why ready', color: '#8C34E9' },
  { label: 'Opi Insights', text: 'Cascade strength scored live at 92', color: '#F59E0B' },
  { label: 'Opi Coaching', text: 'Green streak now 4 days — longest run this window', color: '#1DB8CE' },
];

export default function OpiTeamCard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative max-w-3xl mx-auto">
      <style>{OPI_TEAM_STYLES}</style>

      <div className="relative rounded-2xl border border-[#1E2738] bg-[#0D1220] px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
        {/* ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(140,52,233,0.18), transparent 60%)' }}
        />

        <div className="relative flex flex-col items-center text-center">
          {/* Orb — same identity as the site-wide chat launcher */}
          <div className="otc-orb mb-6" style={{ width: 72, height: 72 }}>
            <span className="otc-orb__core" />
            <span className="otc-orb__sheen" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
            Opi is on shift 24/7
          </h3>
          <p className="text-sm sm:text-base text-[#A0A8B8] max-w-lg leading-relaxed mb-8">
            Every Oplytics module is taught on the same Lean and Six Sigma playbooks — Opi is the AI that
            actually applies them, live, alongside your team. Not here to replace the huddle. Here to make
            every huddle sharper.
          </p>

          {/* Live insight feed */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {INSIGHT_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="rounded-lg border px-4 py-3 text-left bg-[#080C16]"
                style={{ borderColor: `${card.color}40` }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="otc-livedot" style={{ background: card.color }} />
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase"
                    style={{ color: card.color }}
                  >
                    {card.label}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#C7CCD6] leading-snug">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const OPI_TEAM_STYLES = `
@keyframes otc-spin { to { transform: rotate(360deg); } }
@keyframes otc-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
@keyframes otc-pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }

.otc-orb { position: relative; display: inline-block; border-radius: 9999px; flex: none;
  animation: otc-breathe 4s ease-in-out infinite; }
.otc-orb__core { position: absolute; inset: 0; border-radius: 9999px;
  background: conic-gradient(from 0deg, #8C34E9, #1DB8CE, #8C34E9);
  animation: otc-spin 6s linear infinite;
  box-shadow: 0 0 24px rgba(140,52,233,0.5), 0 0 12px rgba(29,184,206,0.45); }
.otc-orb__sheen { position: absolute; inset: 18%; border-radius: 9999px;
  background: radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 45%, transparent 60%);
  mix-blend-mode: screen; }
.otc-livedot { width: 6px; height: 6px; border-radius: 9999px; display: inline-block;
  animation: otc-pulse 2s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .otc-orb, .otc-orb__core, .otc-livedot { animation: none !important; }
}
`;
