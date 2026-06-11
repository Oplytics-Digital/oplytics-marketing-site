/*
 * SqdcpBoardDemo — the SQDCP tier board: the five SQDCP pillar cards (Safety,
 * Quality, Delivery, Cost, People) with a purple title bar, fed fictional Testa
 * Group sample data. Accepts an externalHighlightId (a pillar code) so the auto
 * tour can spotlight one pillar at a time; otherwise every card is interactive.
 */
import { TESTA_SQDCP_BOARD, type SqdcpPillar } from '../data/testaSqdcpBoard';
import SqdcpCard from './SqdcpCard';

interface SqdcpBoardDemoProps {
  board?: SqdcpPillar[];
  /** Pillar code to spotlight (dims the others). Null = all active. */
  externalHighlightId?: string | null;
  /** Force a fixed column count (e.g. 5 for the compact home-card thumbnail). */
  columns?: number;
}

export default function SqdcpBoardDemo({ board = TESTA_SQDCP_BOARD, externalHighlightId = null, columns }: SqdcpBoardDemoProps) {
  const gridClass = columns ? 'grid gap-3' : 'grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5';
  const gridStyle = columns ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } : undefined;
  return (
    <div className="w-full">
      {/* Title bar — Oplytics purple gradient */}
      <div className="px-6 py-3 rounded-t-md" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h2 className="text-lg font-black text-white tracking-wide">Testa Group — SQDCP Tier Board</h2>
        <p className="text-sm text-white/60">Safety · Quality · Delivery · Cost · People — daily tier review</p>
      </div>

      <div className="rounded-b-md p-4" style={{ background: '#0e1624', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className={gridClass} style={gridStyle}>
          {board.map(pillar => (
            <SqdcpCard
              key={pillar.code}
              pillar={pillar}
              dimmed={externalHighlightId != null && externalHighlightId !== pillar.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
