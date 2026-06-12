/**
 * SQDCP demo — interim placeholder. The live SQDCP demo is being built as a public
 * no-auth /demo route on the real sqdcp app; this slot will embed that live window
 * once it is deployed. No fabricated UI, no real customer data.
 */
const LETTERS: [string, string][] = [
  ['S', '#EF4444'], ['Q', '#3b82f6'], ['D', '#8C34E9'], ['C', '#F59E0B'], ['P', '#22C55E'],
];

export default function SQDCPHubDemo() {
  return (
    <div className="aspect-video flex flex-col items-center justify-center text-center p-8" style={{ background: '#0a0e1a' }}>
      <div className="flex items-center gap-1.5 mb-3">
        {LETTERS.map(([letter, color]) => (
          <span key={letter} className="text-2xl font-black" style={{ color }}>{letter}</span>
        ))}
      </div>
      <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'Montserrat' }}>SQDCP live demo</h3>
      <p className="text-sm max-w-sm" style={{ color: '#8890A0' }}>
        A live, interactive window into the real SQDCP app is coming here shortly.
      </p>
    </div>
  );
}
