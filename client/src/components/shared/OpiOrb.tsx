/**
 * OpiOrb — the one visual identity for Opi, reused everywhere he shows up:
 * the chat launcher (MarketingAssistant), the team card (OpiTeamCard), and
 * the /ai hero. Same conic-gradient spin + sheen + breathe as the other two,
 * scoped under its own `opi-orb-*` classnames so this file can be dropped in
 * without touching either.
 */
export default function OpiOrb({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`opi-orb-shared ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <style>{OPI_ORB_STYLES}</style>
      <span className="opi-orb-shared__core" />
      <span className="opi-orb-shared__sheen" />
    </span>
  );
}

const OPI_ORB_STYLES = `
@keyframes opi-orb-spin { to { transform: rotate(360deg); } }
@keyframes opi-orb-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }

.opi-orb-shared { position: relative; display: inline-block; border-radius: 9999px; flex: none;
  animation: opi-orb-breathe 4s ease-in-out infinite; }
.opi-orb-shared__core { position: absolute; inset: 0; border-radius: 9999px;
  background: conic-gradient(from 0deg, #8C34E9, #1DB8CE, #8C34E9);
  animation: opi-orb-spin 6s linear infinite;
  box-shadow: 0 0 24px rgba(140,52,233,0.5), 0 0 12px rgba(29,184,206,0.45); }
.opi-orb-shared__sheen { position: absolute; inset: 18%; border-radius: 9999px;
  background: radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 45%, transparent 60%);
  mix-blend-mode: screen; }

@media (prefers-reduced-motion: reduce) {
  .opi-orb-shared, .opi-orb-shared__core { animation: none !important; }
}
`;
