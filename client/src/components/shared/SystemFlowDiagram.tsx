/**
 * SystemFlowDiagram — shows how the modules cascade from strategy down to
 * the shop floor and back: Policy Deployment sets objectives, SQDCP is the
 * operational hub, OEE Manager + Connect feed data into it, and Action/
 * Safety/Quality/Certification Manager derive their work from it.
 */
import { motion, useReducedMotion } from 'framer-motion';

interface FlowNode {
  name: string;
  color: string;
}

const PD: FlowNode = { name: 'Policy Deployment', color: '#F59E0B' };
const SQDCP: FlowNode = { name: 'SQDCP', color: '#1DB8CE' };
const FEEDS_IN: FlowNode[] = [
  { name: 'OEE Manager', color: '#8C34E9' },
  { name: 'OplyticsConnect', color: '#1DB8CE' },
];
const DERIVES_OUT: FlowNode[] = [
  { name: 'Action Manager', color: '#22C55E' },
  { name: 'Safety Manager', color: '#EF4444' },
  { name: 'Quality Manager', color: '#22C55E' },
  { name: 'Certification Manager', color: '#F97316' },
];

function NodeCard({ node, size = 'md' }: { node: FlowNode; size?: 'sm' | 'md' | 'lg' }) {
  const pad = size === 'lg' ? 'px-6 py-3.5' : size === 'md' ? 'px-4 py-2.5' : 'px-3.5 py-2';
  const text = size === 'lg' ? 'text-sm sm:text-base' : size === 'md' ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs';
  return (
    <div
      className={`rounded-lg border ${pad} ${text} font-semibold text-white text-center whitespace-nowrap`}
      style={{
        borderColor: `${node.color}55`,
        background: `linear-gradient(180deg, ${node.color}1A 0%, ${node.color}0A 100%)`,
      }}
    >
      <span style={{ color: node.color }}>●</span>{' '}
      <span style={{ fontFamily: 'Montserrat' }}>{node.name}</span>
    </div>
  );
}

/** Vertical connector with an arrowhead, optionally labelled. Points down by default. */
function VLink({ label, flip = false }: { label?: string; flip?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1.5">
      {!flip && label && (
        <span className="text-[10px] sm:text-[11px] text-[#596475] tracking-wide mb-1">{label}</span>
      )}
      <svg width="12" height="20" viewBox="0 0 12 20" className="overflow-visible" style={{ transform: flip ? 'rotate(180deg)' : undefined }}>
        <line x1="6" y1="0" x2="6" y2="14" stroke="#3A4356" strokeWidth="2" />
        <path d="M6 20 L1 11 L11 11 Z" fill="#3A4356" />
      </svg>
      {flip && label && (
        <span className="text-[10px] sm:text-[11px] text-[#596475] tracking-wide mt-1">{label}</span>
      )}
    </div>
  );
}

export default function SystemFlowDiagram() {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.5, delay },
        };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Strategy layer */}
      <motion.div {...rise(0)} className="flex justify-center">
        <NodeCard node={PD} size="lg" />
      </motion.div>

      <div className="flex justify-center">
        <VLink label="cascades objectives into" />
      </div>

      {/* Hub layer */}
      <motion.div {...rise(0.08)} className="flex justify-center">
        <NodeCard node={SQDCP} size="lg" />
      </motion.div>

      {/* Feeds-in / derives-out layer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 mt-2">
        {/* Feeds in — arrow points UP into SQDCP, so it sits above the column */}
        <motion.div {...rise(0.16)} className="flex flex-col items-center">
          <div className="flex justify-center">
            <VLink flip />
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#8C34E9] mb-3">
            Feeds In
          </span>
          <div className="flex flex-col gap-2.5 items-center">
            {FEEDS_IN.map((n) => (
              <NodeCard key={n.name} node={n} size="md" />
            ))}
          </div>
        </motion.div>

        {/* Derives out — arrow points DOWN out of SQDCP, so it sits above the column */}
        <motion.div {...rise(0.24)} className="flex flex-col items-center">
          <div className="flex justify-center">
            <VLink />
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#22C55E] mb-3">
            Derives Out
          </span>
          <div className="flex flex-col gap-2.5 items-center">
            {DERIVES_OUT.map((n) => (
              <NodeCard key={n.name} node={n} size="sm" />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        {...rise(0.32)}
        className="text-center text-sm sm:text-base text-[#A0A8B8] leading-relaxed mt-10 max-w-2xl mx-auto"
      >
        An OEE loss or a cross-site OplyticsConnect signal lands on the SQDCP board — it links to the
        relevant Hoshin objective automatically. From there it drives an Action, a Safety flag, or a
        Quality/Certification check, and tracks through to verified closure. One shared data model,
        no spreadsheet reconciliation.
      </motion.p>
    </div>
  );
}
