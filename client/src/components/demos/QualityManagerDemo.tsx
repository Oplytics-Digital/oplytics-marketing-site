/**
 * Quality Manager Demo — Coming Soon placeholder
 * Replaces manufactured animated demo with a simple static placeholder
 * until real screenshots are available from the live service.
 */
import { CheckCircle } from 'lucide-react';

export default function QualityManagerDemo() {
  return (
    <div className="aspect-video flex flex-col items-center justify-center p-8 text-center relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-6 border border-[#3B82F6]/20">
          <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
          Coming Soon
        </h3>
        <p className="text-sm text-[#8890A0] max-w-md mx-auto">
          Quality Manager is currently in development. Full interactive demos will be available when the service launches.
        </p>
      </div>
    </div>
  );
}
